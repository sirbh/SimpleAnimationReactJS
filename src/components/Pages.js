import React from "react"
import Page from './Page/Page'

export const PageOne =()=>
{
    return <Page heading="Presentation" btnArr={[{name:'Next',link:'/page-2'}]}></Page>
}

export const PageTwo =()=>
{
    return <Page heading="Presentation -2" btnArr={[{name:'Next',link:'/page-3'},{name:'Prev Page',link:'/'}]}></Page>
    
}

export const PageThree =()=>
{
    return <Page heading="Presentation -3" btnArr={[{name:'Prev Page',link:'/page-2'}]}></Page>
    
}