import React from 'react';

const PasswordDisplay = ({ password, onGenerate }) => {
    return (
        <div className="password-display-container">
            <input
                type="text"
                value={password}
                readOnly
                placeholder="Generated Password"
            />
            <button className="generate-btn" onClick={onGenerate}>
                Generate Password
            </button>
        </div>
    );
};

export default PasswordDisplay;
