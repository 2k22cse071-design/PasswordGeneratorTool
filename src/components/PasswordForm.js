import React from 'react';

const PasswordForm = ({ config, setConfig }) => {
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setConfig(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : parseInt(value)
        }));
    };

    return (
        <div className="password-form">
            <div className="form-group">
                <label>
                    Length: {config.length}
                    <input
                        type="range"
                        name="length"
                        min="4"
                        max="32"
                        value={config.length}
                        onChange={handleChange}
                        className="length-input"
                    />
                </label>
            </div>

            <div className="checkbox-group">
                <div className="form-group">
                    <label>
                        Uppercase
                        <input
                            type="checkbox"
                            name="uppercase"
                            checked={config.uppercase}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Lowercase
                        <input
                            type="checkbox"
                            name="lowercase"
                            checked={config.lowercase}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Numbers
                        <input
                            type="checkbox"
                            name="numbers"
                            checked={config.numbers}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Symbols
                        <input
                            type="checkbox"
                            name="symbols"
                            checked={config.symbols}
                            onChange={handleChange}
                        />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default PasswordForm;
