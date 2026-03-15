    import "./modal.css";
    import { Check } from "lucide-react";
    import Link from "next/link";

    const Modal = ( props ) => {
        const { fn } = props;

        const myIdBotLink = 'https://t.me/myidbot';
        const fitDayIdBot = 'https://t.me/fit_day_2666_bot';

        return (
            <div className="modal">
                <Check size={48} />
                <h4> Almost everything is done </h4>
                <p> Step №1: <Link href={myIdBotLink} target="_blank"><span className="active_link"> Get your account's ID </span></Link> </p>
                <p> Step №2: <Link href={fitDayIdBot} target="_blank"><span className="active_link"> Open link </span> and send "/start" to the bot</Link> </p>
                <button 
                 onClick={(e) => { 
                    e.preventDefault();
                    fn(false);
                 }}
                > 
                    It's clear! 
                </button>
            </div>
        )
    }
    
    export default Modal;
