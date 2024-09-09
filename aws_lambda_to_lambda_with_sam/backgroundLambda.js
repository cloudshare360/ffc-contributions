exports.handler = async (event) => {
    console.log('Background Lambda started with event:', JSON.stringify(event));
  
    // Simulate a background task that takes time (e.g., processing data)
    await new Promise(resolve => setTimeout(resolve, 5000));  // Simulate 5 seconds of processing
  
    console.log('Background Lambda completed.');
  
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Background task completed.' })
    };
  };
  