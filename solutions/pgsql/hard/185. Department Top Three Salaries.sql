WITH cte AS (
    SELECT
        *
    ,   dense_rank() OVER (PARTITION BY departmentId ORDER BY salary DESC) as rank
    FROM
        employee
)
SELECT
    d.name AS department
,   e.name AS employee
,   e.salary AS salary
FROM
    cte AS e
JOIN
    department AS d
ON e.departmentId = d.id
WHERE e.rank <= 3;