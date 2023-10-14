import React from 'react';

export default function PasswordLength({ length, onLengthChange }) {
    return (
        <div style={{ marginBottom: '20px' }}>
            <span>Password Length: {length}</span>
            <input type="range" min="1" max="32" value={length} onChange={e => onLengthChange(e.target.value)} style={{ width: '100%' }} />
        </div>
    );
}
