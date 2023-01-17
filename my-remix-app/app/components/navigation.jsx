import { Link } from "@remix-run/react";

export default function Navigation(){
    return(
        <div className="w-full h-[10%] bg-blue-900 flex justify-center items-center sticky z-0 top-0">
            <ul className="text-slate-50">
                <li className="hover:cursor-pointer border-[1px] border-slate-100 p-2">
                    Add Item
                </li>

            </ul>
        </div>
    )
}