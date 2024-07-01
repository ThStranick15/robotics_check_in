import Form from "./components/Form";

export default function Main(){
    return(
        <section className="flex flex-col md:flex-row flex-1 items-center justify-around">
            <Form/>
            <div className="flex justify-center">
                <div className="flex justify-center bg-violet-300 p-4 m-2 shadow-lg">
                    <img className="w-11/12" src="/RoboticsFRC.jpg" alt="group-pic" />
                </div>
            </div>
            
        </section>
    )
}