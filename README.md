# MongoDB Update Operation Bug

This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations. The bug involves attempting to increment a field with a string value, which results in an error.

## Bug Description
The provided `bug.js` file contains a JavaScript function that attempts to update a MongoDB document using `$inc` with a string value. This leads to an error because `$inc` expects a numeric value.

## Solution
The `bugSolution.js` file corrects the error by providing the correct numeric value to the `$inc` operator.  This ensures the update operation functions as intended.