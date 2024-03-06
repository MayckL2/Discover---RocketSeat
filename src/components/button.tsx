

export default function Button(props: {text: string}){

    return(<button className="w-full rounded bg-slate-300/20 hover:bg-slate-300/40 transition-all py-3 text-lg outline ">
        {props.text}
    </button>)
}