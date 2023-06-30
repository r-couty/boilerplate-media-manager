<?php

namespace Sebastienheyd\BoilerplateMediaManager\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Tags\HasTags;

class File extends Model
{
    use HasTags;

    protected $fillable = [ 'type', 'path', 'tags' ];
}
