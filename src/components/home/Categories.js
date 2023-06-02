import { categories } from '../../constrants/data';
import { Button, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import styled from '@emotion/styled';
import {Link,useSearchParams} from 'react-router-dom';
import '../../assests/style.css'

const StyledTable = styled(Table)`
    border: 1px solid rgba(224,224,244,1); 
`;
const StyledButton = styled(Button)`
    margin: 20px;
    width: 85%;
    color:
    // background: #6495ED;
    // color: #fff;
    // text-decoration: none;
`  ;
const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;


const Categories = () => {

        const [searchParams] = useSearchParams();
        const category = searchParams.get('category');


       return(
        <>
        <StyledLink to={`/create?category=${category || ''}`} >
        {/* <StyledButton className='button' variant='contained'>create blog</StyledButton> */}
        <Button type="button" class="button">
  <span class="button__text">Create new</span>
  <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
</Button>
        </StyledLink>
            <StyledTable>
                <TableHead>
                    <TableRow>
                    <TableCell>
                        <StyledLink to='/'>
                        All Categories
                        </StyledLink>
                       
                    </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category=>(
                            <TableRow key={category.id} >
                            <TableCell>
                            <StyledLink to={`/?category=${category.type} `}>
                                {category.type}
                            </StyledLink>                
                            </TableCell>
                            </TableRow>
                        ))

                    }
                   
                </TableBody>

            </StyledTable>


        </>
       )
    
}

export default Categories;