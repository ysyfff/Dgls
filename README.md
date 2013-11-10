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

###The most conveniet way without attributes

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

###The most convenient way with attributes

```bash
_('div', {'class': 'Dgls1', 'id': 'Dgls1'},
    'child1',
    _('div', {'class': 'Dgls2', 'id': 'Dgls2'},
        'child2'),
    _('div', {'class': 'Dgls3', 'id': 'Dgls3'},
        'child3',
        _('div', {'class': 'Dgls4', 'id': 'Dgls4'},
            'child3.1'),
        _('div', {'class': 'Dgls5', 'id': 'Dgls5', 'style': 'color:red;'},
            'child3.2')
    )
).string();
```

###The most Flexible way with variable

```bash
var clsName = 'Gdls2';

_('div', {'class': clsName,},
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
