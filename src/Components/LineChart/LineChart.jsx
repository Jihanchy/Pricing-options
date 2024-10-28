import { LineChart as LChart, Line,XAxis,YAxis } from 'recharts';
const LineChart = () => {
    const students = [
        {"name": "Alice",   "id":1, "math_marks": 78, "physics_marks": 82},
        {"name": "Bob",     "id":2, "math_marks": 85, "physics_marks": 88},
        {"name": "Charlie", "id":3, "math_marks": 92, "physics_marks": 91},
        {"name": "David",   "id":4, "math_marks": 70, "physics_marks": 75},
        {"name": "Eva",     "id":5, "math_marks": 88, "physics_marks": 90},
        {"name": "Frank",   "id":6, "math_marks": 94, "physics_marks": 89},
        {"name": "Grace",   "id":7, "math_marks": 76, "physics_marks": 80},
        {"name": "Hannah",  "id":8, "math_marks": 81, "physics_marks": 84},
        {"name": "Isaac",   "id":9, "math_marks": 89, "physics_marks": 92},
        {"name": "Jack",    "id":10, "math_marks": 73, "physics_marks": 78}
      ]
      
    return (
        <div>
            <LChart width={500} height={400} data={students}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math_marks" stroke='green'>
                </Line>
                <Line dataKey="physics_marks" stroke='red'></Line>
                
            </LChart>
            
        </div>
    );
};

export default LineChart;