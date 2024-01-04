interface QuotePros {
    title: string,
    author: string,
    color: string,
    onClick: () => void
}
/**
 * 
 * @param title : string 
 * @param author : string 
 * @param color : string 
 * @param onClick : (s:string) => void 
 * @param title : string 
 * @returns HTMLElement
 */
function Quote({ title, author, color, onClick }: QuotePros) {
    return (
        <div className="quote-machine" style={{ backgroundColor: color }}>
            <div className="card">
                <div className="card-container">
                    <div className="card-title">{title}</div>
                    <div className="card-author">{author}</div>
                    <div className="card-bottom">
                        <div className="left">
                            <button className="card-x-btn btn" style={{ backgroundColor: color }}><img src="/img/youtube.svg" alt="" /></button>
                            <button className="card-t-btn btn" style={{ backgroundColor: color }}><img src="/img/github.svg" alt="" /></button>
                        </div>
                        <button className="card-quote-btn btn" style={{ backgroundColor: color }} onClick={onClick}>quote</button>
                    </div>
                </div>
            </div>
            <div className="by">By Kamate</div>

        </div>
    )
}

export default Quote
