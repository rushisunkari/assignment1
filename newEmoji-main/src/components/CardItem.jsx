
const defaultImage="https://assets.ccbp.in/frontend/react-js/south-downs-national-park-img.png"


export const CardItem=({isOpen,image,id,onClick})=>{
    const imagePath=isOpen?image:defaultImage;
    return (
        <div onClick={()=>onClick(id)}>
            <img src={imagePath} alt={id}/>
        </div>
    )
}