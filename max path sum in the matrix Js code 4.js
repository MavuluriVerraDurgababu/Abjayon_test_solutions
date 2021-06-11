let N = 3, M = 3;
function findMaxPath(mat)
{
	let res = -1;
	for(let i = 0; i < M; i++)
		res = Math.max(res, mat[0][i]);

	for(let i = 1; i < N; i++)
	{
		res = -1;
		for(let j = 0; j < M; j++)
		{
		
			if (j > 0 && j < M - 1)
				mat[i][j] += Math.max(mat[i - 1][j],
							Math.max(mat[i - 1][j - 1],
									mat[i - 1][j + 1]));
			else if (j > 0)
				mat[i][j] += Math.max(mat[i - 1][j],
									mat[i - 1][j - 1]);
									
			else if (j < M - 1)
				mat[i][j] += Math.max(mat[i - 1][j],
									mat[i - 1][j + 1]);
			res = Math.max(mat[i][j], res);
		}
	}
	return res;
}

let mat = [[1,2,3],
		  [9,8,7],
          [4,5,6]];

console.log(findMaxPath(mat));