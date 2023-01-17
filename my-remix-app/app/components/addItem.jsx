export default function AddItem(){

    return(
        <div className="w-[450px] h-[450px] bg-blue-900 rounded-md">
            <svg width="46" height="46" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="ml-auto">
                <path d="M7.496 7.495a.6.6 0 0 1 .85 0l3.174 3.176 3.176-3.176a.6.6 0 0 1 .85.85l-3.177 3.174 3.176 3.176a.603.603 0 0 1 0 .85.6.6 0 0 1-.85 0l-3.175-3.177-3.175 3.176a.6.6 0 1 1-.85-.85l3.177-3.175-3.176-3.175a.6.6 0 0 1 0-.85Z"></path>
            </svg>
            <div className="w-full h-[100%] flex justify-center items-center flex-col gap-5">
                <div className="text-slate-50 text-xl">Add Item</div>
                <input type='text' className="rounded-md bg-blue-900 outline-none border-[1px] border-slate-100 p-2 text-slate-50 w-[300px]"/>
                <button className="p-3 text-slate-50 border-[2px] rounded-md border-slate-100">Submit</button>
            </div>
        </div>
    )
}