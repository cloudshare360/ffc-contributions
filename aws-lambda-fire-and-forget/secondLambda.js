exports.handler = async (event) => {
    console.log('Second Lambda received:', JSON.stringify(event, null, 2));
    // Perform any logic here, e.g., database operation, external API call, etc.
    return { message: "Task completed." };
};
