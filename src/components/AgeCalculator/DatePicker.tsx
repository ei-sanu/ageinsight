import React, { useState, useRef, useEffect } from 'react';
import { format } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface DatePickerProps {
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ selectedDate, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const datePickerRef = useRef<HTMLDivElement>(null);

  // Close datepicker when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDatePicker = () => {
    setIsOpen(!isOpen);
  };

  const handleDateClick = (date: Date) => {
    onChange(date);
    setIsOpen(false);
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newYear = parseInt(event.target.value);
    setCurrentMonth(new Date(newYear, currentMonth.getMonth(), 1));
  };

  // Generate years for dropdown (100 years back from current year)
  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear; i >= currentYear - 100; i--) {
      years.push(i);
    }
    return years;
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    
    const firstDayOfWeek = firstDayOfMonth.getDay(); // 0 for Sunday
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    
    return days;
  };

  const days = generateCalendarDays();
  const dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const years = generateYears();

  return (
    <div className="relative" ref={datePickerRef}>
      <input
        type="text"
        readOnly
        value={selectedDate ? format(selectedDate, 'MMMM d, yyyy') : ''}
        placeholder="Select your birth date"
        onClick={toggleDatePicker}
        className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 cursor-pointer"
      />
      
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 fade-in">
          <div className="p-3">
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={handlePrevMonth}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
              >
                <ChevronLeft size={20} className="text-purple-700 dark:text-pink-400" />
              </button>
              
              <div className="flex items-center gap-2">
                <h3 className="text-md font-medium text-gray-800 dark:text-gray-200">
                  {format(currentMonth, 'MMMM')}
                </h3>
                <select
                  value={currentMonth.getFullYear()}
                  onChange={handleYearChange}
                  className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 rounded-md px-2 py-1 text-sm"
                >
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              
              <button
                onClick={handleNextMonth}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
              >
                <ChevronRight size={20} className="text-purple-700 dark:text-pink-400" />
              </button>
            </div>
            
            <div className="grid grid-cols-7 gap-1">
              {dayNames.map((day) => (
                <div key={day} className="text-center text-xs font-medium text-gray-500 dark:text-gray-400 p-1">
                  {day}
                </div>
              ))}
              
              {days.map((day, index) => (
                <div key={index} className="text-center p-1">
                  {day ? (
                    <button
                      type="button"
                      onClick={() => handleDateClick(day)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                        selectedDate && day.getDate() === selectedDate.getDate() && 
                        day.getMonth() === selectedDate.getMonth() && 
                        day.getFullYear() === selectedDate.getFullYear()
                          ? 'bg-purple-600 dark:bg-pink-500 text-white'
                          : 'hover:bg-purple-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200'
                      }`}
                    >
                      {day.getDate()}
                    </button>
                  ) : (
                    <div className="w-8 h-8"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;