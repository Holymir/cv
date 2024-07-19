import React, {useState, useEffect} from "react";
import "./Footer.css";

const CmdPromptComponent = () => {
    const [code, setCode] = useState("");
    const solidityCode = `
        contract ReadCV {   
            function ContactMe(bool youLikeMe) {
                if (youLikeMe){
                    call();
                    sendMail();
                }
                else {
                    hugs();
                };
            };
        };   
    `;

    useEffect(() => {
        function startAnimation() {
            let i = 0;
            const interval = setInterval(() => {
                setCode(solidityCode.substring(0, i));
                i++;
                if (i > solidityCode.length) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setCode("");
                        startAnimation();
                    }, 2000); // Clear console after 2 seconds
                }
            }, 50);

            return () => clearInterval(interval);
        }
        startAnimation();
    }, [solidityCode]);
    return (
        <div className='cmd-prompt'>
            <div className='cmd-header'>pragma solidity ^0.8.0;</div>
            <div className='cmd-body'>
                <pre>
                    <code>{code}</code>
                </pre>
            </div>
        </div>
    );
};

export default CmdPromptComponent;
