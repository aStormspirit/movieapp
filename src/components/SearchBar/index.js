import React,{useState, useEffect, useRef} from 'react';
// image
import searchIcon from '../../images/search-icon.svg';
// styles
import {Wrapper, Content} from './SearchBar.styled'

const SearchBar = ({ setSearchTerm }) => {
    const [state, setState] = useState('')
    const initial = useRef(true)

    useEffect(() => {
        if (initial.current){
            initial.current = false;
            return;
        }

        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500)

        return () => clearTimeout(timer)
    }, [setSearchTerm, state])

    return(
        <Wrapper>
            <Content>
                <img src={searchIcon} />
                <input type='text' placeholder='Search Movie' onChange={e => setState(e.target.value)} value={state}  />
            </Content>
        </Wrapper>
    )
};

export default SearchBar;