import React from 'react'

const AutoLogout = () => {
    return (
        <div>
            <pre>
                {`
                import { useEffect, useRef } from 'react'
                import { useNavigate } from 'react-router-dom';

                const useAutoLogout = (logOutCallBack) => {

                    const timer = useRef(null);
                    const navigate = useNavigate();
                    const AUTO_RESET_TIME = 30 * 60 * 1000;

                    
                    const resetTimer = () => {
                        if(timer.current) clearTimeout(timer.current);

                        timer.current = setTimeout(() => {
                            logOutCallBack();
                            navigate('/login');
                        }, AUTO_RESET_TIME);
                    }

                    useEffect(() => {
                        const events = ['click', 'mousemove', 'scroll', 'keyup'];

                        events.forEach(event => window.addEventListener(event, resetTimer));
                        resetTimer();

                        return () => {
                            events.forEach(event => window.removeEventListener(event, resetTimer));
                            if(timer.current) clearTimeout(timer.current);
                        }

                    }, []);
                }

                export default useAutoLogout;
                `}
            </pre>
        </div>
    )
}

export default AutoLogout
