casper.start('___________', function() {
    this.fill('form#allergiesChecked', {
        'gluten':    true,
        'dairy':    true,
        'eggs':   false,
        'soy':       false,
        'wheat':      false,
        'peanuts':         false,
        'fish': false,
        'shellfish': false,
        'treeNuts':false
    }, true);
});



casper.run(function() {
    // echo results in some pretty fashion
    this.echo(links.length + ' links found:');
    this.echo(' - ' + links.join('\n - ')).exit();
});

casper.run();