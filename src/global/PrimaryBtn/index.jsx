import React from 'react';

export default function PrimaryBtn({ children }) {
  return (
    <button type="button" className="btn primaryBtn">
      {children}
    </button>
  );
}
