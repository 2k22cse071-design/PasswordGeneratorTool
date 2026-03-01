import React from 'react';

const StrengthIndicator = ({ password, config }) => {
    const calculateStrength = () => {
        if (!password) return { label: '', color: 'transparent', width: '0%' };

        let score = 0;
        const length = password.length;

        if (length > 10) score += 2;
        else if (length >= 6) score += 1;

        let types = 0;
        if (/[A-Z]/.test(password)) types++;
        if (/[a-z]/.test(password)) types++;
        if (/[0-9]/.test(password)) types++;
        if (/[^A-Za-z0-9]/.test(password)) types++;

        if (types >= 3) score += 2;
        else if (types >= 2) score += 1;

        if (score >= 4) return { label: 'Strong', color: '#4caf50', width: '100%' };
        if (score >= 2) return { label: 'Medium', color: '#ff9800', width: '66%' };
        return { label: 'Weak', color: '#f44336', width: '33%' };
    };


    const strength = calculateStrength();

    return (
        <div className="strength-indicator">
            <div className="strength-header">
                <span>Strength:</span>
                <span style={{ color: strength.color, fontWeight: 'bold' }}> {strength.label}</span>
            </div>
            <div className="strength-bar-container">
                <div
                    className="strength-bar"
                    style={{
                        backgroundColor: strength.color,
                        width: strength.width
                    }}
                ></div>
            </div>
        </div>
    );
};

export default StrengthIndicator;
