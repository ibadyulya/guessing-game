class GuessingGame 
{
    constructor()
    {
        this.min = 0;
		this.max = 0;
		this.mid = 0;
    }
    setRange(min, max) 
    {
        this.min = min;
        this.max = max;
    }
    guess() 
    {
        this.mid = Math.ceil((this.min + (this.max - this.min) / 2));
        return this.mid; 
    }

    lower() 
    {
        this.max = this.mid;
    }

    greater() 
    {
        this.min = this.mid + 1;

    }
}

module.exports = GuessingGame;
