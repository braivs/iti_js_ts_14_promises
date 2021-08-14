function getNumber() {
  // const promise = Promise.resolve(Math.random())
  debugger
  const promise = new Promise((resolve, reject) => {
    debugger
    // reject('some error')
    setTimeout(() => {
      resolve(Math.random())
    }, 2000)
  })

  return promise
}

// getNumber().then(n => console.log(n))


const repo = {
  save(data) {
    try {
      localStorage.sedtItem('some-key', JSON.stringify(data))
    } catch (error) {
      return false;
    }
    return true;
  },
  read() {
    const data = localStorage.getItem('some-key')
    if (!data) {
      return null
    } else {
      return JSON.parse(data)
    }
  },
  saveAsync(data) {
    const promise = new Promise((resolve, reject) => {
      try {
        localStorage.setItem('some-key', JSON.stringify(data))
        resolve()
      } catch (error) {
        reject(error)
      }
    })

    return true;
  },
  readAsync() {
    return new Promise((res, rej) => {
      const data = localStorage.getItem('some-key')
      if (!data) {
        res(null)
      } else {
        res(JSON.parse(data))
      }
    })
  }
}

const result = repo.save({name: 'BRIWS'})
console.log('SAVED')
const data = repo.read()
console.log(data)


const run = async () => {
  await repo.saveAsync({name: 'BRIWS'})
  console.log('SAVED')
  const data = await repo.readAsync()
  console.log(data)
}
run()

const counter = () => {
  let i = 1;
  /*const count = setInterval(() => {
      console.log(i)
      i++;
      if (i === 4) clearInterval(count)
  }, 1000)*/
  setTimeout(() => {
    console.log(1)
  }, 1000)
  setTimeout(() => {
    console.log(2)
  }, 2000)
  setTimeout(() => {
    console.log(3)
  }, 3000)
}
counter()
