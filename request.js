const http = require('http')

const count = process.argv[2]
const rtype = process.argv[3]

make(count, rtype)

async function make(count, rtype)
{
	if (rtype === 'parallel')
	{
		for (let i = 0; i < count; i++)
			geturl('http://localhost:8080/')
	}

	if (rtype === 'sequential')
	{
		for (let i = 0; i < count; i++)
			await geturl('http://localhost:8080/')
	}
}

function geturl(url)
{
	return new Promise((resolve, reject) =>
	{
		http.get((url, res) =>
		{
			if (res.statusCode !== 200)
			{
				return reject()
			}

			res.on('end', () =>
			{
				return resolve()
			})
		})
	})
}
