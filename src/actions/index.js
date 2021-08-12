/* 

These are all the actions we are going to perfrom in our app and 
will also manage the states for these, 

# For categories, we only need to fetch the categories present in our backend

# For indivisual post, we only need its id, i.e. we have to fetch the post by id

# For posts, for each post we have to manage the upvotes and downvotes, add, delete and edit 

# For home page, we need to sort the post, so we have to manage the state for that

*/

export * from "./categories";
export * from "./Post";
export * from "./Posts";
export * from "./comments";
export * from "./sort";
