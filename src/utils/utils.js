export const groupByThree = (array) => {

  const groupedByThree = []
  let index = 0

  for(index; index < array.length; index = index + 3) {
    let group = []

    if(array[index]) group.push(array[index])
    if(array[index + 1]) group.push(array[index + 1])
    if(array[index + 2]) group.push(array[index + 2])

    groupedByThree.push(group)
  }

  let lastGroup = []

  for(index; index < array.length; index++) {
    if(array[index]) lastGroup.push(array[index])
    if(array[index + 1]) lastGroup.push(array[index + 1])
    if(array[index + 2]) lastGroup.push(array[index + 2])

    if(lastGroup.length > 0 )groupedByThree.push(lastGroup)
  }

  return groupedByThree
}
