Dgls
==================================================
An efficienty and easily tool.

Overview
--------------------------------------------------

Dgls means "Dynamically Generate Label String". We can use it to gereate a structured label string efficiently and easily.
I write this tool because I think that "Ajax + innerHTML + Something = Better User Experience + High Performance + High Efficiency".
The Something is exactly what I want to do. So Dgls come out！

How to use it?
--------------------------------------------------

1. The most conveniet way
```bash
_('div',  
    'child1',  
    _('div',  
        'child2'),  
    _('div',  
        'child3',  
        _('div',  
            'child3.1'),  
        _('div',  
            'child3.2')  
    )  
).string();  
```
