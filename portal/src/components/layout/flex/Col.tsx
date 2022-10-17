import styled, { css } from 'styled-components';
import Base from './Base';

interface ColProps {
    size?: number;
}

export const Col = styled(Base)<ColProps>`
    flex: ${(props) => props.size || 1};
`