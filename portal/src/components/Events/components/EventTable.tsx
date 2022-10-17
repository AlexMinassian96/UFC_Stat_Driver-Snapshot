// import React from 'react';


// interface Props {

// }

// const EventTable: React.FC<Props> = (props: Props): JSX.Element => {
//     const dispatch = useAppDispatch()
//     const data = useAppSelector(selectEvents)
//     const status = useAppSelector((state) => state.event.status)
//     return (
//         <div>
//             {status === 'LOADING'
//                 ? <div>Testing Loader</div>
//                 : <div>
//                 <GenericTable 
//                     headers = {{
//                         id: 'Id',
//                         type: 'Type',
//                         fighters: 'Fighters',
//                         date: 'Date'
//                     }}
//                     items = {data}
//                     customRenderers = {{
//                         id: (it) => <></>
//                     }}
//                 />
//             </div>}
//             <div>
//                 <button onClick={() => dispatch(fetchEvents())}>Search</button>
//             </div>
//         </div>
//     );
// }

// export default EventTable;