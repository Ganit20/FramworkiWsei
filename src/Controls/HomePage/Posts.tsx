import axios from 'axios';
import {FC, useState, useEffect} from 'react';
import styled from 'styled-components';
import * as cm from '../../StyledComponents/PostsStyledComponent';
import {Colors} from "../../StyledHelpers/Colors";
import Posts from './Posts';


const BottomContainer: FC = () => {
     const prevPage = () => {
        if (currentPage > 1) {
            changePage(currentPage - 1);
        }
    }
    
     const nextPage = () => {
        if (currentPage < maxPage) {
            changePage(currentPage + 1);
        }
    }
    
     const changePage = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    }
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);

    useEffect(() =>{
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(res.data);
            setLoading(false);
        }
        fetchPosts();
    }, []);
    
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const maxPage = posts.length / postsPerPage;
    
    

    return ( 
        <cm.Wrapper>      
            <div>
            {currentPosts.map( post => ( 
                <cm.PostMainContainer key={(post as any).id}>

                    <div className='title'>
                        {(post as any).title}
                    </div>

                    <div className='text'>
                        <p style={{color:Colors.black}}>
                            {(post as any).body}
                        </p>
                    </div>

                    <div className='corpTypeUpdate'>
                        <img className='corpPicture' src="./icons/corporate.jpg"/> 
                        <p className='corpName'>Corporation.</p>
                        <h1>·</h1> 
                        <img className='typeIcon' src="./icons/entities.png"/> 
                        <p className="Type">Corporate</p>
                        <h1>·</h1>
                        <p className="lastUpdate">{new Date().toDateString()}</p>
                    </div>
                </cm.PostMainContainer> 
            ))}
            </div>
           <cm.PaginationButtons>
                <cm.button onClick={prevPage} >Prev</cm.button>
                
                <cm.button onClick={() => changePage(1)}>
                    01
                </cm.button>

                <cm.button className='mx-4'>...</cm.button>
                

                {currentPage - 1 > 0 &&
                    <cm.button onClick={() => changePage(currentPage - 1)}>
                        {String(currentPage - 1).padStart(2, '0')}
                    </cm.button>
                }

                <cm.button className='text-gray-800'>{String(currentPage).padStart(2, '0')}</cm.button>

                {currentPage + 1 <= maxPage &&
                    <cm.button onClick={() => changePage(currentPage + 1)}>
                        {String(currentPage + 1).padStart(2, '0')}
                    </cm.button>
                }

                <cm.button className='mx-4'>...</cm.button>

                <cm.button onClick={() => changePage(maxPage)}>
                    {String(maxPage).padStart(2, '0')}
                </cm.button>

                <cm.button onClick={nextPage} >Next</cm.button>
                
            </cm.PaginationButtons>
        </cm.Wrapper>
    );
};
export default BottomContainer;




 
