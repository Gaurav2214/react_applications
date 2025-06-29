import React, { useEffect, useState } from 'react'

const DynamicGreetingApp = () => {
    const [time, setTime] = useState(new Date());
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setTime(now);
            const hour = now.getHours();

            if (hour >= 5 && hour < 12) {
                setGreeting('Good Morning! 🌞');
            } else if (hour >= 12 && hour < 17) {
                setGreeting('Good Afternoon! ⛅');
            } else if (hour >= 17 && hour < 21) {
                setGreeting('Good Evening! 🌇');
            } else {
                setGreeting('Good Night! 🌙✨');
            }
        }, 1000);

        return () => clearInterval(interval);

    }, []);

    const formatTime = (date) =>
        date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    return (
        <div className='container'>
            <div className='module-head'>
                <h2 className='module-title'>Dynamic Greeting App </h2>
            </div>
            <div className='chips-input-container'>
                <div
                    className="modal-content"
                    style={{
                        textAlign: "center",
                        padding: "50px",
                        marginTop:"20px",
                        fontFamily: "Arial, sans-serif",
                        backgroundColor: "#f5f5f5",
                        color: "#333",
                    }}
                >
                    <p>{greeting}</p>
                    <p style={{marginTop:"10px"}}>{formatTime(time)}</p>
                </div>
            </div>
        </div>
    );
}

export default DynamicGreetingApp;
