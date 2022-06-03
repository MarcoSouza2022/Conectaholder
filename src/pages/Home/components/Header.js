import React from "react";

function Header() {
    return (
        <header className="header">
                <div className="toolbar">
                   <div>
                        <a href='/'>Conecta Holder - Auteração</a>
                    </div> 
                    <div>
                        <button>Novo Post</button>
                        <span>img1</span>
                        <span>img2 - alteração</span>
                    </div>
                </div>
            </header>
    )
}

export default Header;