<?php

namespace App\Model;

use App\Model\AbstractManager;
use PDO;
use Symfony\Component\HttpClient\HttpClient;

class PersonalityManager extends AbstractManager
{
    public const TABLE = 'personality';
}