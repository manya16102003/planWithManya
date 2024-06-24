import Card from "./Card";
function Tours({tours , removeTour })
{
    return(
        <div className="container">
            <h2 className="title">Plan with Manya</h2>
            <div className="cards">
                {
                    tours.map((tour)=>
                    {
                        // whenever we use map on a list it is a good practise to set key with unique attribute
                        //if there is no unique attribute set key={index}
                        //{...tour} called as spread operator where we have pased whole copy with all properties of object
                        //The spread operator allows you to pass all properties of an object as props to a component.
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    })
                }
            
            </div>
        </div>
        
    )
}
export default Tours;