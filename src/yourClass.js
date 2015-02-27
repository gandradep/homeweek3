/**
 * @class this class is supposes to comparte between major, minor, b7 and major 7 chord
 *
 * @constructor
 */
var YourClass = function()
	{
		/**
		 * currentState if major7 or minor7
		 * @type {string}
		 */
		this.currentState 	= '';
		this.currentState2 	= '';
		
		/**
		 * values of the oscillator to form the chord
		 * @type {number}
		 */
		this.freq1			= 440;
		this.freq3 			= 0;
		this.freq5 			= 659.25;
		this.freq7			= 0;
		
		/**
		 * position of mouse on screen
		 * @type {number}
		 */
		this.locationX 		= 0;
		this.locationY 		= 0;


		/**
 		 * Oscillators being played to create the chord
 		 * @type {Object}
		 */
		this.oscRoot 	= new Tone.Oscillator(this.freq1,'sine').toMaster();
		this.osc3 		= new Tone.Oscillator(this.freq3,'sine').toMaster();
		this.osc5 		= new Tone.Oscillator(this.freq5,'sine').toMaster();
		this.osc7 		= new Tone.Oscillator(this.freq7,'sine').toMaster();

		/**
		 * volume value set of the oscillators
		 * @type{number}
		 */
		this.oscRoot.volume.value 	= -20;
		this.osc3.volume.value 		= -20;
		this.osc5.volume.value 		= -20;
		this.osc7.volume.value 		= -20;

		// initialize Oscilators
		this.oscRoot.start();
		this.osc3.start();
		this.osc5.start();
		this.osc7.start();

	
				
				
	};
	
/**
 * get the position of the mouse on the x axis
 * @return {number}
 */
YourClass.prototype.seventhCalc = function()
	{
				
		if(this.locationX<=1 && this.locationX>=0.5){
				console.log('we are second half');
			if(this.currentState == 'major7') return;
			else{
					
					this.osc7.frequency.value = 830.61;
					this.currentState = 'major7';
		
					
				}
			}
		else if(this.locationX<0.5 && this.locationX>=0){
					
			if(this.currentState == 'dominant')return;
			else{
					
					this.osc7.frequency.value = 783.99;
					this.currentState = 'dominant';
				
					}
			}

		return this.freq7;

				
	};
/**
 * get the position of the mouse on the y axis
 * @return {number}
 */
YourClass.prototype.thirdCalc = function()
	{

		if(this.locationY<=1 && this.locationY>=0.5){
					
			if(this.currentState2 == 'major') return;
			else{
					
					this.osc3.frequency.value = 554.37;
					this.currentState2 = 'major';

					// call function to make it white noise
				}
			}
		else if(this.locationY<0.5 && this.locationY>=0){
					//console.log('we are in middle 1/3');
			if(this.currentState2 == 'minor')return;
			else{
					
					this.osc3.frequency.value = 523.25;
					this.currentState2 = 'minor';
					// call function to make it pink noise 
					}
			}

		return this.freq3;
	};
			

