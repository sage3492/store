(function(){
var app = angular.module('store', [ ]);
    
    app.controller('StoreController', function(){
        this.product = gem;
    });
    
    
    app.controller('PanelController', function(){
        this.tab = 1;
        
        this.selectTab = function(setTab) {
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
    });
    
    var gem = [
        
        {
        name: 'Dodecahedron',
        price: 2.95,
        description: 'twelve flat faces on this gem',
               images: [
               {
               full: 'flowers.jpg'
               }
                   ],
            
            reviews: [
                {
                    stars: 5,
                    body: "I love this product!",
                    author: "joe@thomas.com"
                }, 
                {
                    stars: 1,
                    body: "This product blows!",
                    author: "tim@hater.com"
                }, 
                {
                    stars: 2.5,
                    body: "It's alright!",
                    author: "always@neutral.com"
                }
                
            ],
                   
        canPurchase: true,
        soldOut: false,
    }, 
        {
        name: 'Sapphire',
        price: 1000.95,
        description: 'what a gem!',
            images: [
               {
               full: 'lighthouse.jpg'
               }
                   ],
               reviews: [
                {
                    stars: 5,
                    body: "Amazing!",
                    author: "whats@up.com"
                }, 
                {
                    stars: 5,
                    body: "Perfect!",
                    author: "hi@sejal.com"
                }, 
                {
                    stars: 4,
                    body: "It's good!",
                    author: "hey@ya.com"
                }
                
            ],
        canPurchase: true,
        soldOut: false,
    }, 
        {
        name: 'Ruby',
        price: 800.95,
        description: 'red as can be',
            images: [
               {
               full: 'waterfall.jpg'
               }
                   ],
               reviews: [
                {
                    stars: 5,
                    body: "WOO!",
                    author: "joe@thomas.com"
                }, 
                {
                    stars: 5,
                    body: "Love it!",
                    author: "tim@hater.com"
                }, 
                {
                    stars: 5,
                    body: "Amazing product!",
                    author: "always@neutral.com"
                }
                
            ],
        canPurchase: true,
        soldOut: false,
    }
        
        
        ];
    
    app.directive('productTitle', function () {
        return {
            restrict: 'E',
            templateUrl: 'product-title.html',
            controller: function() {
                this.tryIt = {
                    time: '8:30pm',
                    place: 'Coding Temple'
                };
                console.log(this)
                this.help = 'help here';
                
            },
            controllerAs: 'products'
        
        };
    });
})();