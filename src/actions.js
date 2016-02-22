module.exports = {
  changeTitle: changeTitle,
  changeDescription: changeDescription
}

function changeTitle (newTitle) {
  return {
    type: 'CHANGE_TITLE',
    data: newTitle
  }
}

function changeDescription (newDescription) {
  return {
    type: 'CHANGE_DESCRIPTION',
    data: newDescription
  }
}
