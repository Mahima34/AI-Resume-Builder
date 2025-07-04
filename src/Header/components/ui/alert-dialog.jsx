import React from 'react';

export const AlertDialog = ({ children, ...props }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" {...props}>
    {children}
  </div>
);

export const AlertDialogTrigger = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);

export const AlertDialogContent = ({ children, ...props }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4" {...props}>
    {children}
  </div>
);

export const AlertDialogHeader = ({ children, ...props }) => (
  <div className="mb-4" {...props}>{children}</div>
);

export const AlertDialogTitle = ({ children, ...props }) => (
  <h2 className="text-lg font-semibold" {...props}>{children}</h2>
);

export const AlertDialogDescription = ({ children, ...props }) => (
  <p className="text-sm text-gray-600 mt-2" {...props}>{children}</p>
);

export const AlertDialogFooter = ({ children, ...props }) => (
  <div className="flex justify-end space-x-2 mt-4" {...props}>{children}</div>
);

export const AlertDialogAction = ({ children, ...props }) => (
  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" {...props}>
    {children}
  </button>
);

export const AlertDialogCancel = ({ children, ...props }) => (
  <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400" {...props}>
    {children}
  </button>
);