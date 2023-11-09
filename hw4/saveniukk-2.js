function Vector(components) {
    this.components = components;

    this.add = function(vector2) {
        if (this.components.length !== vector2.components.length) {
            throw new Error('Vectors must be of the same length');
        }
        let newVector = [];
        for(let k = 0; k<this.components.length; k++){
            let sumOfVectors = this.components[k] + vector2.components[k];
            newVector.push(sumOfVectors);
        }
        return new Vector(newVector);
    };

    this.subtract = function(vector2) {
        if (this.components.length !== vector2.components.length) {
            throw new Error('Vectors must be of the same length');
        }
        let newVector = [];
        for(let k = 0; k<this.components.length; k++){
            let subOfVectors = this.components[k] - vector2.components[k];
            newVector.push(subOfVectors);
        }
        return new Vector(newVector);
    };

    this.dot = function(vector2) {
        if (this.components.length !== vector2.components.length) {
            throw new Error('Vectors must be of the same length');
        }
        let arrOfMultiplication = [];
        for(let k = 0; k<this.components.length; k++){
            let multiplications = this.components[k] * vector2.components[k];
            arrOfMultiplication.push(multiplications);
        }
        let dot =  arrOfMultiplication.reduce((a, b) => a + b, 0);
        return dot;
    };

    this.norm = function() {
        return Math.sqrt(this.components.reduce((sum, component) => sum + Math.pow(component, 2), 0));
    };

    this.equals = function(vector2) {
        if (this.components.length !== vector2.components.length) {
            return false;
        }
        return this.components.every((component, index) => component === vector2.components[index]);
    };

    this.toString = function() {
        return '(' + this.components.join(',') + ')';
    };
}
