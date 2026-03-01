import React, { useState } from 'react';

const PasswordDisplay = ({ password, onGenerate }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (!password) return;
        navigator.clipboard.writeText(password);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="password-display-container">
            <div className="input-group">
                <input
                    type="text"
                    value={password}
                    readOnly
                    placeholder="Generated Password"
                />
                <button
                    className="copy-btn"
                    onClick={handleCopy}
                    disabled={!password}
                    title="Copy to clipboard"
                >
                    {copied ? 'Copied!' : 'Copy'}
                </button>
            </div>
            <button className="generate-btn" onClick={onGenerate}>
                Generate Password
            </button>
            {copied && <div className="copy-message">Password Copied!</div>}
        </div>
    );
};

export default PasswordDisplay;

