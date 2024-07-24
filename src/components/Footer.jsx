import React, {useState, useEffect} from "react";
import "./Footer.css";

const CmdPromptComponent = () => {
    const [code, setCode] = useState("");
    const solidityCode = `if [ "$youLikeMe" = true ]; then
        call
        sendMail
    else
        hugs
    fi`;

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
            <div className='cmd-body'>
                <pre>
                    <code>{code}</code>
                </pre>
            </div>
        </div>
    );
};

export default CmdPromptComponent;
