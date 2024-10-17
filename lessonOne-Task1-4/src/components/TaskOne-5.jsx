// Завдання 5 *
// Створіть простий компонент, який міститиме текст і картинку (попередньо додайте нове зображення до проєкту).

function TextAndPicture (text, picture, size) {
    const styles = {
        display: "flex", 
        padding: "5px 5px",
        boxSizing: "border-box",
        width: `${size.w}`,
        height: `${size.h}`,
        
    }

    return (
        <div style={{border:"solid 1px red"}}>
            <p>{text}</p>
            <img src={picture} alt=""/>
        </div>
    )
}

export default TextAndPicture