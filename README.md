## Javascript loops with recursion technique

I implemented javascript loops with new technique which is recursion. 
As we know in functional programming language implementations, sometimes, iteration can be very expensive and recursion can be very cheap. In many, recursion is transformed into a simple jump, but changing the loop variable (which is mutable) sometimes requires some relatively heavy operations, especially on implementations which support multiple threads of execution. Mutation is expensive in some of these environments because of the interaction between the mutator and the garbage collector, if both might be running at the same time.

So, in functional programming languages recursion is more faster than iteration.

## Install

```shell
npm i js-loops-with-recursion
```

## Usage

```jsx
/**
 *  @author Muhammad Faiz <faizqadri234@gmail.com>
**/

import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { map, forEach, filter, find, some, } from 'js-loops-with-recursion';

const App = () => {

  const tempArray = [
    { id: 1, color: 'red' },
    { id: 2, color: 'blue' },
    { id: 3, color: 'yellow' },
    { id: 4, color: 'red' }
  ]

  useEffect(() => {
    forEach(tempArray, (item: any, index: number) => {
      console.log('here is console of each item', item, 'of index', index)
    })
    const newArray = map(tempArray, (item: any) => item)
    const filteredArray = filter(tempArray, (item: any) => item.color === 'red')
    const findItem = find(tempArray, (item: any) => item.id === 3)
    const blueColorExist = some(tempArray, (item: any) => item.color === 'blue')

    console.log('here is console of new array with map', newArray)
    console.log('here is console of new filtered array with filter', filteredArray)
    console.log('here is console of item of id 3 with find', findItem)
    console.log('here is console of blue color existence with some', blueColorExist)

  }, [])

  return (
    <View style={styles.mainContainer}>
      {map(tempArray, (item: any, index: number) =>
        <Text style={{ backgroundColor: item.color, marginBottom: 10 }}>{item.color}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;

```

**MIT Licensed**