let rerenderEntireTree = () => {
    console.log('State changed')
}
let state = {
    profilePage: {
        posts: [
            { id: 0, message: 'Hi, how are you?', likesCount: 12 },
            { id: 1, message: 'Its my first post', likesCount: 11 },
            { id: 2, message: 'Nice', likesCount: 5 },
            { id: 3, message: 'Thank you', likesCount: 3 },
        ],
        newPostText: 'Oleg Kraiev',

    },
    dialogsPage: {
        messages: [
            { id: 0, message: 'Hi' },
            { id: 1, message: 'How are you?' },
            { id: 2, message: 'I am fine!' },
            { id: 3, message: 'Yo' },
            { id: 4, message: 'Yo' },
            { id: 5, message: 'Yo' },
            { id: 6, message: 'Yo' },
        ],
        dialogs: [
            { id: 0, name: 'Oleg' },
            { id: 1, name: 'Andrew' },
            { id: 2, name: 'Sveta' },
            { id: 3, name: 'Sasha' },
            { id: 4, name: 'Vlad' },
            { id: 5, name: 'Sergei' },
            { id: 6, name: 'Dima' },
        ],
    },

}

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    
}

export default state