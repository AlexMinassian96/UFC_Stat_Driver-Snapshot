import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../store";
import { fetchFighters } from "../../store/Fighers/thunks/fetchFighters";
import { GenericTable } from "../form/GenericTable";

interface Props {
    
}

const Wrapper = styled.div`
    border: 1px solid black;
    
`

export const FighterCard: React.FC<Props> = (props: Props): JSX.Element => {
    const dispatch = useAppDispatch();
    const data = useAppSelector((state) => state.fighter.fighers);
    const status = useAppSelector((state) => state.fighter.status);

    const mappedData = data.map( ( item ) => {
        return {
            id: '' + item['id'],
            FirstName: item['FirstName'],
            LastName: item['LastName'],
            NickName: item['Nickname']
        }
    })

    return (
        <Wrapper>
            <GenericTable 
                items = {mappedData} 
                headers = {{
                    id: 'Id',
                    FirstName: 'FirstName',
                    LastName: 'LastName',
                    NickName: 'NickName'
                }} />
            <div>
                <button onClick={() => dispatch(fetchFighters())}>Search</button>
            </div>
        </Wrapper>
    );
}