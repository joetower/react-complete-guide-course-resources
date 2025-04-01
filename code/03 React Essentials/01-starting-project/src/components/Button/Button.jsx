export default function Button({children, Icon, mode, ...props}) {
    const Class = Icon ? "icon-button button" : mode ? `button ${mode}-button` : "button";
  // Todo: Build this component!
return (    
    <button className={Class} mode={mode} {...props}>
            {Icon && <span className="button-icon"><Icon /></span>}
            <span>{children}</span>
    </button>
 );
}
