interface circle
{
    kind:"circle",
    pi:number,
    radius:number
}

interface square
{
    kind:"square",
    side:number
}

interface rectangle
{
    kind:"rectangle",
    length:number,
    breadth:number
}

type Shape = circle | square | rectangle;


const getArea = (shape:Shape)=>
{
    switch (shape.kind)
    {
        case "circle":
            return shape.pi * shape.radius * shape.radius;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.breadth;
        default:
            const _defaultShapeValue:never=shape;
            return _defaultShapeValue;
    }
}

console.log(getArea({kind:"circle",pi:3.14, radius:10}));
console.log(getArea({kind:"rectangle", length: 24, breadth:10}));